// Wait for polymer elements to be ready before we start working with them
document.addEventListener('polymer-ready', function() {

  var mainContent = document.querySelector('.main-content');
  var homeBtn = document.querySelector('.home-btn');
  var usersBtn = document.querySelector('.users-btn');

  function changeView(event) {
    var btn = event.target;
    var viewName = btn.getAttribute('data-view');
    replaceContent(viewName);
  }

  // Listen for clicks on all .btn elements
  homeBtn.addEventListener('click', changeView);
  usersBtn.addEventListener('click', changeView);

  // Don't get CSS classes (which start with a .) confused with
  // element names. home-view is an element name whereas .home-btn
  // is a CSS class. Here we're creating a new instance of an element.
  var homeView = document.createElement('home-view');
  var usersView = document.createElement('users-view');

  // Default to the homeView
  mainContent.appendChild(homeView);

  // Swap the content inside the .main-content element
  function replaceContent(viewName) {
    if (viewName == 'home') {
      mainContent.replaceChild(homeView, mainContent.children[0]);
    } else if (viewName == 'users') {
      // Here's an example of how you could pass some data to the users view
      usersView.setUsers([{ name: 'Rob' }, { name: 'Eric' }]);
      mainContent.replaceChild(usersView, mainContent.children[0]);
    }
  }

});
