exports.name = 'kabam-plugin-winston';

exports.listener = {
 'error':function(error){
   console.log(error);
 }
};