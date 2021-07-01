function openLearningGoal(evt, learningGoal) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("learningGoal");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" current", "");
  }

  document.getElementById(learningGoal).style.display = "block";
  evt.currentTarget.className += " current";
}
