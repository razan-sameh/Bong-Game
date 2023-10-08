

// Example: Receiving player 2 positions from Firebase
firebase.database().ref(`playersPostion/${2}`).on('value', (snapshot) => {
if (snapshot.exists()) {
    const players = snapshot.val();
    p2.style.top = players["Postion"] + "px";
    paddle2Position = players["Postion"] ;

}
});



// Example: Receiving player 1 positions from Firebase
firebase.database().ref(`playersPostion/${1}`).on('value', (snapshot) => {
if (snapshot.exists()) {
    const players = snapshot.val();
    p1.style.top = players["Postion"] + "px";
    paddle1Position = players["Postion"] ;
}
});

// Example: Receiving ball positions from Firebase
firebase.database().ref(`ball`).on('value', (snapshot) => {
    if (snapshot.exists()) {
        const ballDB = snapshot.val();
        start.style.display = "none";
        if (ballDB.enter == true) {
            ballStyle.style.left = ballDB.x + 'px';
            ballStyle.style.top = ballDB.y + 'px';  
        }
    }
    return;
  });
// Example: Receiving score positions from Firebase
firebase.database().ref(`score`).on('value', (snapshot) => {
    if (snapshot.exists()) {
        const scores = snapshot.val();
        scoreP1.innerHTML = scores.Player1;
        scoreP2.innerHTML = scores.Player2;
        winPlayer.innerHTML = scores.Winner ;
        winPlayer.style.display = "block";
        if (scores.Player1 == 5) {
            winPlayer.style.color = "yellow";
        }
        else{
            winPlayer.style.color = "red";
        }


    }
});




