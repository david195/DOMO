var fs = require("fs");

var DOMO = function(options){
  console.log('DOMO iniciado...');
  this.source = JSON.parse(fs.readFileSync("source.json"));
  this.options = options;
  this.actions = {};
  this.data = {};
  this.load_source()
}

DOMO.prototype.exec = function(instruction){
    console.log("exec: "+instruction);
    console.log(this.actions);
}

DOMO.prototype.add_device = function(){

}

DOMO.prototype.remove_device = function(){

}

DOMO.prototype.load_source = function(){
  for( var i=0; i<this.source.ndevices; i++){
    var code = require("./plugins/"+this.source.devices[i].name);
    this.source.devices[i]["source"] = new code(this.source.devices[i].id,this.actions);
    this.data[{'id' : "d"+this.source.devices[i].id, 'description' : this.source.devices[i]["description"]}]
    console.log("d"+this.source.devices[i].id+" : "+this.source.devices[i]["description"]);
  }
}


module.exports = DOMO;
