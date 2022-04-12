document.addEventListener("DOMContentLoaded", function () {

    var placeHTML = document.getElementById("place"); // you are ...
    var placeImgHTML = document.getElementById("placeImg"); // image with background
    var directionHTML = document.getElementById("direction"); // you can go ...
    var commandTextHTML = document.getElementById("commandText"); // kernel
    var seenHTML = document.getElementById("seen"); // you can see ...
    var carryingHTML = document.getElementById("carrying"); // you are carrying ...

    var textHTML = document.getElementById("text"); // error, information

    capsLock = true;
    game = {
        board: [
            [
                new _Location(1, 1, "You are inside a brimstone mine", "rgb(235, 211, 64)", [0, 1, 0, 0], []),
                new _Location(1, 2, "You are at the entrance to the mine", "rgb(89,93,87)", [0, 1, 0, 1], []),
                new _Location(1, 3, "A hill", "rgb(117, 237, 243)", [0, 1, 1, 1], [31]),
                new _Location(1, 4, "Some bushes", "rgb(202,230,51)", [0, 1, 0, 1], []),
                new _Location(1, 5, "An old deserted hut", "rgb(220, 204, 61)", [0, 1, 0, 1], [27]),
                new _Location(1, 6, "The edge of a forest", "rgb(167, 245, 63)", [0, 1, 0, 1], []),
                new _Location(1, 7, "A dark forest", "rgb(140, 253, 99)", [0, 0, 1, 1], [14])
            ],
            [
                new _Location(2, 1, "A man nearby making tar", "rgb(255, 190, 99)", [0, 1, 1, 0], []),
                new _Location(2, 2, "A timber yard", "rgb(255, 190, 99)", [0, 1, 1, 1], []),
                new _Location(2, 3, "You are by a roadside shrine", "rgb(167, 245, 63)", [1, 1, 1, 1], [10]),
                new _Location(2, 4, "You are by a small chapel", "rgb(212, 229, 36)", [0, 1, 0, 1], []),
                new _Location(2, 5, "You are on a road leading to a wood", "rgb(167, 245, 63)", [0, 1, 1, 1], []),
                new _Location(2, 6, "You are in a forest", "rgb(167, 245, 63)", [0, 1, 0, 1], []),
                new _Location(2, 7, "You are in a deep forest", "rgb(140, 253, 99)", [1, 0, 0, 1], [18])
            ],
            [
                new _Location(3, 1, "You are by the Vistula River", "rgb(122, 232, 252)", [1, 1, 0, 0], []),
                new _Location(3, 2, "You are by the Vistula River", "rgb(140, 214, 255)", [1, 0, 0, 1], [32]),
                new _Location(3, 3, "You are on a bridge over river", "rgb(108, 181, 242)", [1, 0, 1, 0], []),
                new _Location(3, 4, "You are by the old tavern", "rgb(255, 189, 117)", [0, 1, 0, 0], []),
                new _Location(3, 5, "You are at the town's end", "rgb(255, 190, 99)", [1, 0, 1, 1], []),
                new _Location(3, 6, "You are in a butcher's shop", "rgb(255,188,102)", [0, 0, 0, 1], []),
                new _Location(3, 7, "You are in a cooper's house", "rgb(255, 188, 102)", [0, 0, 1, 0], [])
            ],
            [
                new _Location(4, 1, "You are in the Wawel Castle", "rgb(255, 176, 141)", [0, 1, 0, 0], []),
                new _Location(4, 2, "You are in a dragon's cave", "rgb(198, 205, 193)", [0, 1, 0, 1], []),
                new _Location(4, 3, "A perfect place to set a trap", "rgb(255, 176, 141)", [1, 0, 0, 1], []),
                // new _Location(4, 3, "A perfect place to set a trap", "rgb(255, 176, 141)", [1, 0, 0, 1], [13, 17, 20, 23, 26]),
                new _Location(4, 4, "You are by the water mill", "rgb(255, 190, 99)", [0, 1, 0, 0], [21]),
                new _Location(4, 5, "You are at a main crossroad", "rgb(255, 190, 99)", [1, 1, 1, 1], []),
                new _Location(4, 6, "You are on a town street", "rgb(255, 190, 99)", [1, 1, 0, 1], []),
                new _Location(4, 7, "You are in a frontyard of your house", "rgb(255, 190, 99)", [1, 0, 1, 1], [])
            ],
            [
                null,
                null,
                null,
                new _Location(5, 4, "You are by a swift stream", "rgb(108,181,242)", [0, 1, 0, 0], []),
                new _Location(5, 5, "You are on a street leading forest", "rgb(255,190,99)", [1, 0, 1, 1], [33]),
                new _Location(5, 6, "You are in a woodcutter's backyard", "rgb(255,190,99)", [0, 0, 1, 0], []),
                new _Location(5, 7, "You are in a shoemaker's house", "rgb(254,194,97)", [1, 0, 0, 0], [])
            ],
            [
                null,
                null,
                null,
                new _Location(6, 4, "You are in a bleak funeral house", "rgb(254,194,97)", [0, 1, 0, 0], [24]),
                new _Location(6, 5, "You are on a path leading to the wood", "rgb(167,245,63)", [1, 1, 0, 1], []),
                new _Location(6, 6, "You are at the edge of a forest", "rgb(167,245,63)", [1, 1, 0, 1], []),
                new _Location(6, 7, "You are in a deep forest", "rgb(140,253,99)", [0, 0, 0, 1], []),
            ]
        ],
        items: [
            null, null, null, null, null, null, null, null, null, null,
            new _Item(10, "a KEY", 1, "KEY"),
            new _Item(11, "an AXE", 1, "AXE"),
            new _Item(12, "STICKS", 1, "STICKS"),
            new _Item(13, "sheeplegs", 0, "sheeplegs"),
            new _Item(14, "MUSHROOMS", 1, "MUSHROOMS"),
            new _Item(15, "MONEY", 1, "MONEY"),
            new _Item(16, "a BARREL", 1, "BARREL"),
            new _Item(17, "a sheeptrunk", 0, "sheeptrunk"),
            new _Item(18, "BERRIES", 1, "BERRIES"),
            new _Item(19, "WOOL", 1, "WOOL"),
            new _Item(20, "a sheepskin", 0, "sheephead"),
            new _Item(21, "a BAG", 1, "BAG"),
            new _Item(22, "a RAG", 1, "RAG"),
            new _Item(23, "a sheephead", 0, "sheephead"),
            new _Item(24, "a SPADE", 1, "SPADE"),
            new _Item(25, "SULPHUR", 1, "SULPHUR"),
            new _Item(26, "a solid poison", 0, "solid poison"),
            new _Item(27, "a BUCKET", 1, "BUCKET"),
            new _Item(28, "a TAR", 1, "TAR"),
            new _Item(29, "a liquid poison", 0, "liquid poison"),
            new _Item(30, "a dead dragon", 0, "dead dragon"),
            new _Item(31, "a STONE", 1, "STONE"),
            new _Item(32, "a FISH", 1, "FISH"),
            new _Item(33, "a KNIFE", 1, "KNIFE"),
            new _Item(34, "a DRAGONSKIN", 1, "DRAGONSKIN"),
            new _Item(35, "a dragonskin SHOES", 1, "SHOES"),
            new _Item(36, "a PRIZE", 1, "PRIZE"),
            new _Item(37, "a SHEEP", 1, "SHEEP")
        ],

        actions: [
            new _Action(10, 56, 11, "You opened a tool shed and took an axe", false),
            new _Action(11, 67, 12, "You cut sticks for sheeplegs", false),
            new _Action(12, 43, 13, "You prepared legs for your fake sheep", true),
            new _Action(14, 34, 15, "The tavern owner paid you money", false),
            new _Action(15, 37, 16, "The cooper sold you a new barrel", false),
            new _Action(16, 43, 17, "You made a nice sheeptrunk", true),
            new _Action(18, 36, 19, "The butcher gave you wool", false),
            new _Action(19, 43, 20, " You prepared skin for your fake sheep", true),
            new _Action(21, 57, 22, "You used your tools to make a rag", false),
            new _Action(22, 43, 23, "You made a fake sheephead", true),
            new _Action(24, 11, 25, "You are digging... (timeout) and digging... (timeout) That's enough sulphur for you", false),
            new _Action(25, 43, 26, "You prepared a solid poison", true),
            new _Action(27, 21, 28, "You got a bucket full of tar", false),
            new _Action(28, 43, 29, "You prepared a liquid poison", true),
            new _Action(37, 43, 30, "The dragon noticed your gift... (timeout) The dragon ate your sheep and died!", true),
            new _Action(33, 43, 34, "You cut a piece of dragon's skin", false),
            new _Action(34, 57, 35, "You used your tools to make shoes", false),
            new _Action(35, 41, 36, "The King is impressed by your shoes", false),
            new _Action(36, 41, null, null, false)
        ],

        renderPlace: function (x, y) {
            placeHTML.innerHTML = game.board[y - 1][x - 1].description // you are ...

            if (game.player.dragon == true && game.player.pos_x == 3 && game.player.pos_y == 4)
                placeImgHTML.src = "gfx/DS68.bmp";

            else
                placeImgHTML.src = "gfx/" + y.toString() + x.toString() + ".gif" // set img

            placeImgHTML.style.background = game.board[y - 1][x - 1].color // color background
            directionHTML.innerHTML = ''; // you can go ...
            seenHTML.innerHTML = ''; // you see ...
            // carryingHTML.innerHTML = ''; // you are carrying ...


            // Items, add to board
            if (game.board[y - 1][x - 1].items.length > 0) {
                for (let i = 0; i < game.board[y - 1][x - 1].items.length - 1; i++) {
                    seenHTML.innerHTML += game.items[game.board[y - 1][x - 1].items[i]].varietyItem + ", "
                }
                seenHTML.innerHTML += game.items[game.board[y - 1][x - 1].items[game.board[y - 1][x - 1].items.length - 1]].varietyItem
            } else seenHTML.innerHTML += " nothing"

            // carrying - hand
            if (game.player.hand.length > 0)
                carryingHTML.innerHTML = game.player.hand[0];
            else
                carryingHTML.innerHTML = " nothing"

            // norths
            tab = []
            if (game.board[y - 1][x - 1].north[3] == 1) tab.push("WEST")
            if (game.board[y - 1][x - 1].north[0] == 1) tab.push("NORTH")
            if (game.board[y - 1][x - 1].north[1] == 1) tab.push("EAST")
            if (game.board[y - 1][x - 1].north[2] == 1) tab.push("SOUTH")

            for (let i = 0; i < tab.length - 1; i++) {
                directionHTML.innerHTML += tab[i] + ", "
            }
            directionHTML.innerHTML += tab[tab.length - 1]

            for (let i = 0; i < 4; i++) {
                document.getElementById("kompasN").style.display = "block";
                document.getElementById("kompasE").style.display = "block";
                document.getElementById("kompasS").style.display = "block";
                document.getElementById("kompasW").style.display = "block";
            }

            if (tab.indexOf("WEST") != -1) document.getElementById("kompasW").style.display = "none";
            if (tab.indexOf("NORTH") != -1) document.getElementById("kompasN").style.display = "none";
            if (tab.indexOf("EAST") != -1) document.getElementById("kompasE").style.display = "none";
            if (tab.indexOf("SOUTH") != -1) document.getElementById("kompasS").style.display = "none";

            //directionHTML.innerHTML = tab
        },

        renderText: function (text, time) {
            var words = text.split("(timeout)");
            // console.log(words)
            commandTextHTML.style.display = "none";
            textHTML.style.display = "block";
            textHTML.innerHTML = words[0]

            for (let i = 1; i < words.length; i++) {
                setTimeout(function () {
                    textHTML.innerHTML = words[i];
                }, time ? time * i : 800 * i)
            }


            setTimeout(function () {
                commandTextHTML.style.display = "inline-block";
                textHTML.style.display = "none";
                document.getElementById("whatNow").focus();

                // focus();
            }, time ? words.length * time : words.length * 800);



        },

        cursor: {
            pos: 165,
            step: 0,

            right: function () {
                // console.log("RIGHT")
                if (document.getElementById("whatNow").value.length > this.step) {
                    this.step++;
                    if (this.step <= 20) this.pos += 16;
                    document.getElementById("cursor").style.left = this.pos + "px";
                }
                // if (document.getElementById("whatNow").value.charAt(this.step) != "") {
                //     document.getElementById("cursor").innerHTML = document.getElementById("whatNow").value.charAt(this.step)
                //     console.log(document.getElementById("whatNow").value.charAt(this.step))
                // }
                // else {
                //     document.getElementById("cursor").innerHTML = ""
                // }
            },

            left: function () {
                // console.log("LEFT")
                if (this.step > 0) {
                    this.step--;
                    if (this.step < 20) this.pos -= 16;
                    document.getElementById("cursor").style.left = this.pos + "px";
                }
                // if (document.getElementById("whatNow").value.charAt(this.step) != "") {
                //     document.getElementById("cursor").innerHTML = document.getElementById("whatNow").value.charAt(this.step)
                //     console.log(document.getElementById("whatNow").value.charAt(this.step))
                // }
                // else {
                //     document.getElementById("cursor").innerHTML = ""
                // }
            },

            reset: function () {
                this.step = 0;
                this.pos = 165;
                document.getElementById("cursor").style.left = this.pos + "px";
            }

        },

        player: {
            pos_x: 7,
            pos_y: 4,
            // pos_x: 3,
            // pos_y: 4,
            hand: [],
            milestone: 0,
            dragon: false,
            go: function (dir) {

                if (dir == "up" && tab.indexOf("NORTH") >= 0) {
                    this.pos_y--
                    game.renderText("You are going north.");
                }
                else if (dir == "right" && tab.indexOf("EAST") >= 0) {
                    this.pos_x++
                    game.renderText("You are going east.");
                }
                else if (dir == "bottom" && tab.indexOf("SOUTH") >= 0) {
                    this.pos_y++
                    game.renderText("You are going south.");
                }
                else if (dir == "left" && tab.indexOf("WEST") >= 0) {
                    if (this.pos_x == 2 && this.pos_y == 4 && this.dragon == false) {
                        game.renderText("You can't go that way... (timeout) The dragon sleeps in a cave!", 1500);
                    } else {
                        game.renderText("You are going west.");
                        this.pos_x--
                    }
                }
                else game.renderText("You can't go that way.");
                console.log(this.pos_x, this.pos_y);
                game.renderPlace(this.pos_x, this.pos_y);
            },

            takeItem: function (item) {
                var itemId = 0
                var flag
                var issetOnLocation = false
                var location = game.board[this.pos_y - 1][this.pos_x - 1].items
                for (let i = 10; i < game.items.length; i++) {
                    if (game.items[i].item == item) {
                        itemId = game.items[i].id;
                        flag = game.items[i].flag;
                        console.log("TAKE")
                    }
                }

                for (let i = 0; i < location.length; i++) {
                    if (location[i] == itemId) issetOnLocation = true
                }

                console.log(issetOnLocation)

                if (location.length == 0 || issetOnLocation == false) {
                    game.renderText("There isn't anything like that here");
                }
                else if (game.player.hand.length >= 1) {
                    game.renderText("You are carrying something");
                }
                else if (flag != 1) {
                    game.renderText("You can't carry it");
                }
                else {
                    this.hand.push(item);
                    location.splice(location.indexOf(itemId), 1)
                    game.renderText("You are taking " + item)
                    game.renderPlace(this.pos_x, this.pos_y)
                }
                // game.board[this.pox_y - 1][this.pos_x - 1].items.forEach(function (id) {
                //     itemsOnLocation.push(id);
                // })
                // console.log(itemsOnLocation);
            },

            dropItem: function (item) {
                var itemId = 0
                var location = game.board[this.pos_y - 1][this.pos_x - 1].items
                for (let i = 10; i < game.items.length; i++) {
                    if (game.items[i].item == item) {
                        itemId = game.items[i].id;
                        console.log("DROP");
                    }
                }

                var howManyItemsOnLocation = 1;

                for (let i = 0; i < location.length; i++) {
                    if (game.items[location[i]].flag == 1) {
                        howManyItemsOnLocation++
                    }
                }

                if (howManyItemsOnLocation > 3) {
                    game.renderText("You can't store any more here");
                }
                else if (game.player.hand.length == 0) {
                    game.renderText("You are not carrying anything");
                }
                else if (game.player.hand[0] != item) {
                    game.renderText("You are not carrying it");
                }
                else {
                    this.hand.splice(0, 1);
                    location.push(itemId)
                    game.renderText("You are about to drop " + item);
                    game.renderPlace(this.pos_x, this.pos_y)
                }
            },

            useItem: function (item) {
                var itemId = 0
                var issetInHand = false
                var location = game.board[this.pos_y - 1][this.pos_x - 1].items
                var action
                // console.log(item);

                for (let i = 10; i < game.items.length; i++) {
                    if (game.items[i].item == item) {
                        itemId = game.items[i].id;
                    }
                }

                if (game.player.hand[0] == item) issetInHand = true

                for (let i = 0; i < game.actions.length; i++) {
                    if (game.actions[i].itemId == itemId) action = game.actions[i]
                }

                if (issetInHand == false) {
                    game.renderText("You aren't carrying anything like that");
                }
                else if (action == undefined || action.x != this.pos_x || action.y != this.pos_y) {
                    game.renderText("Nothing happened")
                }
                else if (itemId == 33 && this.dragon == false) {
                    game.renderText("Nothing happened")
                }
                else {
                    this.hand.splice(0, 1);
                    if (itemId == 36) {
                        document.getElementById("endScreen").style.display = "block";
                        document.getElementById("game").style.display = "none";
                        console.log("WYGRANA GRY!!!");
                    } else {

                        if (action.newItem == 30) {
                            console.log("Podmiana grafiki na martwego smoka");
                            this.dragon = true;
                        }
                        this.changeItem(action.newItem, action.where);
                        game.renderText(action.message, 2000);
                        game.renderPlace(this.pos_x, this.pos_y)

                        if (this.milestone == 6) {
                            setTimeout(() => {
                                this.createSheep();
                                this.milestone = 0;
                                console.log("NOWA OWCA");
                            }, 800)

                        }
                        console.log("MILESTONES: " + this.milestone);
                    }
                }

            },

            changeItem: function (itemId, where) {
                var newItem
                for (let i = 10; i < game.items.length; i++) {
                    if (game.items[i].id == itemId) newItem = game.items[i].item
                }
                if (where == false) {
                    game.player.hand.push(newItem);
                }
                else {
                    game.board[this.pos_y - 1][this.pos_x - 1].items.push(itemId);
                    this.milestone++;
                }
                game.renderPlace(this.pos_x, this.pos_y);
            },

            createSheep: function () {
                for (let i = 0; i < game.board[3][2].items.length; i++) {
                    if (game.board[3][2].items[i] == 13 || game.board[3][2].items[i] == 17 || game.board[3][2].items[i] == 20 || game.board[3][2].items[i] == 23 || game.board[3][2].items[i] == 26 || game.board[3][2].items[i] == 29) {
                        console.log(game.board[3][2].items[i])
                        game.board[3][2].items.splice(i, 1);
                        i--;
                    }
                }

                game.board[3][2].items.push(37)
                game.renderText("Your fake sheep is full of poison and ready to be eaten by the dragon", 3000);
                game.renderPlace(this.pos_x, this.pos_y)
            },

            show: function (text) {
                var gameBoard = document.getElementById("gameBoard")
                gameBoard.style.display = "none";

                var vAndG = document.getElementById("vocabularyAndGossip")
                vAndG.innerHTML = "<br />" + text;
                vAndG.style.display = "block";
                document.addEventListener("keypress", myFunction)

                function myFunction(e) {
                    vAndG.style.display = "none";
                    gameBoard.style.display = "block";
                    document.getElementById("whatNow").focus();
                    document.removeEventListener("keyperss", myFunction)
                    e.preventDefault();
                }
            },
        },


    } // KONIEC OBIEKTU



    var audio = document.getElementById("audioTag");
    var pictures = document.getElementById("obrazkiCzolowka").children
    var picturesCounter = 0;


    pictures[0].style.display = "block";


    window.addEventListener("keypress", changePicture)


    function changePicture() {
        window.removeEventListener("keypress", changePicture);
        for (let i = 0; i < 4; i++) {
            setTimeout(function () {
                if (picturesCounter == 0) audio.play();
                if (picturesCounter < 3) {
                    for (let j = 0; j < 20; j++) {
                        setTimeout(function () {
                            pictures[picturesCounter].style.opacity = j / 20;
                        }, 50 * j)
                    }
                    setTimeout(function () {
                        for (let j = 0; j < 20; j++) {
                            setTimeout(function () {
                                pictures[picturesCounter].style.opacity = 1 - j / 20;
                            }, 50 * j)
                        }
                    }, 7000)
                    pictures[picturesCounter].style.display = "none";
                    pictures[++picturesCounter].style.display = "block";
                }
                else {
                    audio.pause();
                    pictures[picturesCounter].style.display = "none";
                    document.getElementById("game").style.display = "block";
                    focus();
                }
            }, 8000 * i)

        }
    }


    // window.addEventListener("keypress", changePicture)

    // function changePicture() {
    //     if (picturesCounter == 0) audio.play();

    //     if (picturesCounter < 3) {
    //         pictures[picturesCounter].style.display = "none";
    //         pictures[++picturesCounter].style.display = "block";
    //     }
    //     else {
    //         audio.pause();
    //         pictures[picturesCounter].style.display = "none";
    //         window.removeEventListener("keypress", changePicture);
    //         document.getElementById("game").style.display = "block";
    //         focus();
    //     }
    // }

    game.renderPlace(7, 4);
})




function _Location(y, x, description, color, north, items) {
    this.x = x;
    this.y = y;
    this.description = description;
    this.color = color;
    this.north = north;
    this.items = items;
}

function _Item(id, varietyItem, flag, item) {
    this.id = id;
    this.varietyItem = varietyItem;
    this.flag = flag;
    this.item = item;
}

function _Action(itemId, yx, newItem, message, where) {
    this.itemId = itemId
    this.x = yx.toString()[1];
    this.y = yx.toString()[0];
    this.newItem = newItem;
    this.message = message;
    this.where = where;
}



function focus() {
    var form = document.getElementById("whatNow");

    // form.value = "█";

    setTimeout(function () {
        form.focus();
    }, 100);

    document.addEventListener("keydown", function (e) {
        if (e.key == "CapsLock") {
            capsLock = !capsLock;
        } else if (e.key == "Tab") {
            e.preventDefault();
        }
    })

    // document.addEventListener("keyup", function (e) {
    //     if (e.key == "CapsLock") {
    //         capsLock = !capsLock;
    //     }
    // })

    form.addEventListener("blur", function () {
        setTimeout(function () {
            form.focus();
        }, 100);
    })

    form.addEventListener("keypress", function (e) {
        e.preventDefault();


        // form.style.width = parseFloat(form.style.width) + 16 + "px";
        // var caretPos = form.value.indexOf("█");
        // form.value = form.value.split("█")[0];
        // form.value = form.value.replace(/█/g, "");
        // console.log(form.value.slice(caretPos, 1))


        if (capsLock == true && e.shiftKey == false) form.value += e.key.toUpperCase();
        else if (capsLock == true && e.shiftKey == true) form.value += e.key.toLowerCase();
        else if (capsLock == false && e.shiftKey == false) form.value += e.key.toLowerCase();
        else form.value += e.key.toUpperCase();

        game.cursor.right();


        // form.value += "█";

    })

    form.addEventListener("keydown", function (e) {

        if (e.keyCode == 8 || e.keyCode == 37) {
            // backspace and left arrow
            game.cursor.left();
        }

        else if (e.keyCode == 39) {
            // right arrow
            game.cursor.right();
        }

        if (e.keyCode === 13) {
            e.preventDefault();

            game.cursor.reset();

            switch (form.value.split(" ")[0]) {

                case "N":
                case "NORTH":
                    game.player.go("up");
                    break;

                case "E":
                case "EAST":
                    game.player.go("right");
                    break;

                case "S":
                case "SOUTH":
                    game.player.go("bottom");
                    break;

                case "W":
                case "WEST":
                    game.player.go("left");
                    break;

                case "T":
                case "TAKE":
                    game.player.takeItem(form.value.split(" ")[1])
                    console.log("TAKE " + form.value.split(" ")[1]);
                    break;

                case "D":
                case "DROP":
                    game.player.dropItem(form.value.split(" ")[1]);
                    console.log("DROP " + form.value.split(" ")[1]);
                    break;

                case "U":
                case "USE":
                    game.player.useItem(form.value.split(" ")[1]);
                    console.log("USE " + form.value.split(" ")[1])
                    break;

                case "V":
                case "VOCABULARY":
                    var string = "" +
                        "NORTH or N, SOUTH or S<br /><br />" +
                        "WEST or W, EAST or E<br /><br />" +
                        "TAKE (object) or T (object)<br /><br />" +
                        "DROP (object) or D (object)<br /><br />" +
                        "USE (object) or U (object)<br /><br />" +
                        "GOSSIPS or G, VOCABULARY or V<br /><br />" +
                        "Press any key"
                    game.player.show(string);
                    break;

                case "G":
                case "GOSSIP":
                    var string = "The  woodcutter lost  his home key...<br /><br />" +
                        "The butcher likes fruit... The cooper<br /><br />" +
                        "is greedy... Dratewka plans to make a<br /><br />" +
                        "poisoned  bait for the dragon...  The<br /><br />" +
                        "tavern owner is buying food  from the<br /><br />" +
                        "pickers... Making a rag from a bag...<br /><br />" +
                        "Press any key"
                    game.player.show(string);
                    break;

                default:
                    game.renderText("Try another word or V for vocabulary", 1500);
                    break;

            }

            form.value = "";
        }
    })
}