const circumference = radius => "The circumference of a circle of radius " + radius + " is " + 2*Math.PI*radius;
const area = radius => "Its area is " + Math.PI*Math.pow(radius, 2);

module.exports.circumference = circumference;
module.exports.area = area;