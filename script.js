// copying optional
onload = () => {
    // intialize first
    alertView.init();
    // then render it
    alertView.render('Alert', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  }
  
  // required
  var alertView = {
    init: () => {
      this.alertElem = document.getElementById('alert');
      this.alertTitleElem = document.getElementById('alert-title');
      this.alertTextElem = document.getElementById('alert-text');
      this.alertButtonElem = document.getElementById('alert-button');
      this.alertButtonElem.addEventListener('click', () => {
        this.alertElem.style.display = 'none';
      });
    },
    render: (title, text, can, sub = 'Submit') => {
      let box, cancel, submit;
      this.alertTitleElem.innerHTML = title;
      this.alertTextElem.innerHTML = text;
      this.alertButtonElem.innerHTML = sub;
    }
  }