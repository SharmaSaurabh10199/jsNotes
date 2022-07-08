// it is done by tryand catch
// try gives the ok the right code, 
// when there is error, it throws into the catch block

throw new Error('intended error pushed');

try {
    console.log('in try');
    sonu();
} catch (error) {
    console.log('sonu was not here')
} finally{
    console.log('finally run this')
}
// finally is executed always, chahe try mme jaye ya fir catch 
