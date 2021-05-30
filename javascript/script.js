window.onload = function() {
    var score, highscore, streak, beststreak = 0;
    var tk_global;
    var time = 7;
    document.querySelector(".time").innerHTML = `Time Left: ${time.toString()}`
    repeattime = function() {
        var irt = 1;
        rt = setInterval(function() {
            time -= 1;
            document.querySelector(".time").innerHTML = `Time Left: ${time.toString()}`
            irt += 1;
            if (time === 0) {
                clearInterval(rt)
                irt = 0;
                document.querySelector(".time").innerHTML = `Time Left: ${irt.toString()}`
                var elements = document.getElementsByTagName('button');
                while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
                get_players();
                addlisteners();
                score = 0;
                streak = 0;
                document.querySelector(".sco").innerHTML = "Score: " + score.toString();
                document.querySelector(".strk").innerHTML = "Streak: " + streak.toString();
                time = 8;
                repeattime()
            } else {}
        }, 1000)
    }
    get_players = function() {

        colors = [ // colors
            "orange",
            "pink",
            "yellow",
            "aqua",
            "red",
            "blue",
            "purple"
        ]
        plr_choice = [
            3, 4, 5, 6, 7, 8, 9, 10 //how many players
        ]

        players = []
        let mulpos = 789; //int for *
        let addpos = 600;
        var plr_array_tk = Math.floor(Math.random() * plr_choice.length);
        //creating elements & adding attributes
        for (let i = 0; i < plr_choice[plr_array_tk]; i++) {
            plr = document.createElement("BUTTON");
            plr.className = `player${Math.round(Math.random() * 456)}`;
            plr.style.width = "100px";
            plr.style.height = "100px";
            plr.style.position = "absolute";
            plr.style.right = `${Math.round(Math.random() * mulpos + addpos)}px`;
            plr.style.left = `${Math.round(Math.random() * mulpos)}px`;
            plr.style.top = `${Math.round(Math.random() * mulpos)}px`;
            plr.style.bottom = `${Math.round(Math.random() * mulpos)}px`;
            plr.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            players.push(plr.className);
            document.body.appendChild(plr);

        }
        const tokill = players[Math.floor(Math.random() * players.length)];
        tk_global = tokill;
        for (let i = 0; i < players.length; i++) {
            //checks if player's background is the same to tokill's and changes it
            if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                    document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                        document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                        if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                            document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                            if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                                document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                                if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                                    document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                                    if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                                        document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                                        if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                                            document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                                            if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                                                document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                                                if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                                                    document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                                                    if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                                                        document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                                                        if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                                                            document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                                                            if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                                                                document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                                                                if (document.querySelector(`.${players[i]}`).style.backgroundColor === document.querySelector(`.${tokill}`).style.backgroundColor && players[i] != tokill) {
                                                                    document.querySelector(`.${players[i]}`).style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (players[i] === tokill) {} else {}
        }
        document.querySelector(".clr").innerHTML = "Color: " + document.querySelector(`.${tokill}`).style.backgroundColor;
        document.querySelector(".sco").innerHTML = "Score: " + score.toString()
        document.querySelector(".hsco").innerHTML = "High Score: " + highscore.toString()
    }
    addlisteners = function() {
        const tokill = tk_global;
        document.querySelector(".strk").innerHTML = "Streak: " + streak.toString();
        document.querySelector(".bstrk").innerHTML = "Best Streak: " + beststreak.toString();
        var btn = document.getElementsByTagName("button");
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", function() {
                var scoreshow1 = document.createElement("P");
                scoreshow1.innerHTML = "+1";
                scoreshow1.style.color = "green";
                scoreshow1.style.top = btn[i].style.top;
                scoreshow1.style.left = btn[i].style.left;
                scoreshow1.style.bottom = btn[i].style.bottom;
                scoreshow1.style.right = btn[i].style.right;
                scoreshow1.style.position = "absolute";
                if (btn[i].className === tokill) {
                    //correct
                    score += 1;
                    streak += 1;
                    document.querySelector(".strk").innerHTML = "Streak: " + streak.toString();
                    document.querySelector(".bstrk").innerHTML = "Best Streak: " + beststreak.toString();
                    document.querySelector(".sco").innerHTML = "Score: " + score.toString();
                    time = 8;
                    var elements = document.getElementsByTagName('button');
                    while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
                    if (score > highscore) {
                        highscore += 1;
                        document.querySelector(".hsco").innerHTML = "High Score: " + highscore.toString()
                        if (streak > beststreak) {
                            beststreak += 1;
                            document.querySelector(".bstrk").innerHTML = "Best Streak: " + beststreak.toString();
                        }
                    } else {}
                    document.body.appendChild(scoreshow1);
                    setTimeout(function() {
                        scoreshow1.remove()
                        get_players();
                        addlisteners();
                    }, 477);
                } else {
                    //wrong
                    streak = 0;
                    document.querySelector(".strk").innerHTML = "Streak: " + streak.toString();
                    score_minus_choice = [
                        1, 2, 3, 4, 5
                    ]
                    const minuschoice = score_minus_choice[Math.floor(Math.random() * score_minus_choice.length)];
                    if (score === 0) {} else {
                        score -= minuschoice;
                        if (score <= 0) {
                            score = 0
                        } else {
                            document.querySelector(".sco").innerHTML = "Score: " + score.toString();
                        }
                        var scoreshow2 = document.createElement("P");
                    }
                    var scoreshow2 = document.createElement("P");
                    if (score <= 0) {
                        score = 0;
                        scoreshow2.innerHTML = "-0";
                    } else {
                        scoreshow2.innerHTML = `-${minuschoice}`;
                    }
                    scoreshow2.style.color = "red";
                    scoreshow2.style.top = btn[i].style.top;
                    scoreshow2.style.left = btn[i].style.left;
                    scoreshow2.style.bottom = btn[i].style.bottom;
                    scoreshow2.style.right = btn[i].style.right;
                    scoreshow2.style.position = "absolute";
                    time = 8;
                    var elements = document.getElementsByTagName('button');
                    while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
                    document.body.appendChild(scoreshow2);
                    setTimeout(function() {
                        scoreshow2.remove()
                        get_players();
                        addlisteners();
                    }, 477);
                }
            });
        }
    }
    get_players();
    addlisteners();
    repeattime()
    document.querySelector(".rst").addEventListener("click", function() {
        score = 0;
        streak = 0;
        time = 7;
        irt = 1;
        clearInterval(rt)
        var elements = document.getElementsByTagName('button');
        while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
        document.querySelector(".sco").innerHTML = "Score: " + score.toString();
        document.querySelector(".strk").innerHTML = "Streak: " + streak.toString();
        get_players();
        addlisteners();
        repeattime();
        document.querySelector(".time").innerHTML = `Time Left: ${time.toString()}`
    });
}