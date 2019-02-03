var clipboard = new Clipboard(".action-button",{
  text: function() {
    return '7pj2wpvq'
  }
});
var successText = document.querySelector(".action-button");
clipboard.on("success",function() {
  successText.innerHTML="好了";
});
clipboard.on("error",function() {
  console.log("failed")
})