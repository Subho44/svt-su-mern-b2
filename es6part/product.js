const x = (price,qty)=> price*qty;
const y = msg => "its okk..";
const z = name => `welcome ${name} to our dashboard`;
const userprofile = user => {
    const {name,email,role} = user;
    return `${name} - ${email} - ${role}`;
}
const a1 = [1,2];
const a2 = [...a1,3,4];


module.exports = {x,y,z,userprofile,a2};