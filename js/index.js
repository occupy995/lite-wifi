var clipboard = new Clipboard(".action-button",{
  text: function() {
    return 'test123'
  }
});
var successText = document.querySelector(".action-button");
clipboard.on("success",function() {
  successText.innerHTML="好了(-^〇^-)";
});
clipboard.on("error",function() {
  console.log("failed")
})