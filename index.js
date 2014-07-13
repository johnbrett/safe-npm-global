var exec = require('child_process').exec;

var npm_packages = "~/.npm-packages"

exec('mkdir -p "'+npm_packages+'"', function(err, stdout, stderr){
    exec('echo "prefix = '+npm_packages+'" >> .npmrc', function(err, stdout, stderr){

        var append_string = "# Tell our environment about user-installed node tools \n" +
        "PATH=\""+npm_packages+"/bin:$PATH\" \n" +
        "# Unset manpath so we can inherit from /etc/manpath via the `manpath` command \n" +
        "unset MANPATH  # delete if you already modified MANPATH elsewhere in your configuration \n" +
        "MANPATH=\""+npm_packages+"/share/man:$(manpath)\" \n\n" +

        "# Tell Node about these packages \n" +
        "NODE_PATH=\""+npm_packages+"/lib/node_modules:$NODE_PATH\" \n\n";

        exec('echo "'+append_string+'" >> .bashrc', function(err, stdout, stderr){
            console.log("finished")
        })
        
    })
})
