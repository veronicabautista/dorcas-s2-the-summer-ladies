
//escritura automática visor
const writeData = (event) => {
  var guiltyElement = event.currentTarget;
  var targetID = guiltyElement.getAttribute('data-donde');
  var formProperty = guiltyElement.getAttribute('data-property');
  document.querySelector('#' + targetID).innerHTML = guiltyElement.value;
  saveForm(formProperty,guiltyElement.value);
};
nameField.addEventListener('keyup', writeData);
roleField.addEventListener('keyup', writeData);
