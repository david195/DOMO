var fs = require("fs");

var DOMO = function(options){
  console.log('DOMO iniciado...');
  this.source = JSON.parse(fs.readFileSync("source.json"));
  this.options = options;
  this.load_source()
}

DOMO.prototype.exec = function(instruction){
    console.log("D0_0.on()");
}

DOMO.prototype.add_device = function(){

}

DOMO.prototype.remove_device = function(){

}

DOMO.prototype.load_source = function(){
  for( var i=0; i<this.source.ndevices; i++){
    var code = require("./plugins/"+this.source.devices[i].name);
    this.source.devices[i]["source"] = new code(this.source.devices[i].id);
    console.log("D"+this.source.devices[i].id+" : "+this.source.devices[i]["description"]);
  }
}


module.exports = DOMO;
