window.addEventListener('DOMContentLoaded', function () {})

const ctc = document.querySelector(".bible-passage2");

ctc.onclick = function() {
  document.execCommand("copy");
}

ctc.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", ctc.textContent);
    console.log(event.clipboardData.getData("text"))
    $('.alert-dismissible')[0].style.display='block';
    $('.top-alert-msg').text('Copied');

    setTimeout(() => {
        $('.top-alert-msg').text('');
        $('.alert-dismissible')[0].style.display='none';
    }, 1000);
    // alert(event.clipboardData.getData("text"));
  }
});
// bible passage



