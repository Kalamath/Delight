"use strict";
/* global surveyQuestions, surveyOptions */


class ViewController {

    constructor() {

        this.backgroundIMGElement = $("#fullBackground");
        this.screenElement = $("#screen");
        this.welcomeScreenElement = $("#welcomeScreen");
        this.startLoginBTNElement = $("#startLoginBTN");
        this.surveyScreenElement = $("#accountScreen");
        this.nameInputElement = $("#name");
        this.photoInputElement = $("#photo");
        this.questionsWrapperElement = $("#questionsWrapper");
        this.submitLoginBTNElement = $("#submitLoginBTN");
        this.friendMatchModalElement = $("#friendMatchModal");
        this.matchNameElement = $("#matchName");
        this.matchPhotoElement = $("#matchPhoto");
        this.percentageMatchElement = $("#percentageMatch");
        this.questionsForSurvey = $("#surveyQuestions");
        this.loginBTNElement = $("#loginBTN");

        this.selectElements = [];

        this.assignListeners();
        
        // this.assignQuestions();
    }

    // assignQuestions() {

    //     let count = 1;

    //     const classes = "formInput dropdownInput";

    //     for (const question of surveyQuestions) {

    //         const newSelectElement = $("<select>").attr("id", "question" + count).addClass(classes).attr("required", "");

    //         const newOptionElement = $("<option>").attr("value", "").text(question.question);

    //         newSelectElement.append(newOptionElement);

    //         for (const option of surveyOptions) {

    //             const newOptionElement = $("<option>").attr("value", option.value).html(option.text);

    //             newSelectElement.append(newOptionElement);
    //         }

    //         this.questionsWrapperElement.append(newSelectElement);

    //         this.selectElements.push(newSelectElement);

    //         count++;
    //     }
    // }

    assignListeners() {

        this.startLoginBTNElement.one("click", () => {
            console.log("Im here first")
            this.login();
        });

        this.loginBTNElement.one("click", () => {

            this.startSurvey();
        })

        // this.submitLoginBTNElement.click((event) => {

        //     this.startSurvey(event);
        //     // this.submitSurvey(event);
        // });
    }

    login() {

        this.welcomeScreenElement.fadeTo(500, 0.0).promise().then(() => {

            setTimeout(() => {

                this.welcomeScreenElement.hide();

                this.screenElement.attr("class", "screenExpanded");

            }, 500);

            setTimeout(() => {

                this.surveyScreenElement.fadeTo(1000, 1.0);

                this.backgroundIMGElement.attr("class", "focus");

                this.nameInputElement.focus();

            }, 1000);
        });
    }

    startSurvey() {

        this.surveyScreenElement.fadeTo(500, 0.0).promise().then(() => {

            setTimeout(() => {

                this.questionsForSurvey.fadeTo(1000, 1.0);
            })
        });
        console.log('im here')
    }

    // submitSurvey(event) {

    //     const name = this.nameInputElement.val().trim();
    //     const photo = this.photoInputElement.val().trim();
    //     const scores = [];

    //     for (const selectElement of this.selectElements) {

    //         const score = selectElement.val().trim();

    //         scores.push(score);
    //     }

    //     if (this.isInputValid(name, photo, scores)) {

    //         event.preventDefault();

    //         const newFriend =
    //         {
    //             name: name,
    //             photo: photo,
    //             scores: scores
    //         };

    //         $.post("/api/friends", newFriend, (friendMatch) => {

    //             console.log(`Friend Match...\n   id    : ${friendMatch.id}\n   name  : ${friendMatch.name}\n   photo : ${friendMatch.photo}\n   scores: [${friendMatch.scores}]\n   match%: ${friendMatch.percentageMatch}\n\n`);

    //             this.showFriendMatchModal(friendMatch.name, friendMatch.photo, friendMatch.percentageMatch);

    //             this.clearInputFields();

    //         }).fail((error) => {

    //             console.log(`${error.responseJSON.message}  ${error.responseJSON.reason}\n\n`);

    //             alert(`${error.responseJSON.message}  ${error.responseJSON.reason}\n\n`);

    //         });
    //     }
    // }

    isInputValid(name, photo, scores) {

        if (typeof name !== 'string' || name.length === 0) {

            return false;
        }

        if (typeof photo !== 'string' || photo.length === 0) {

            return false;
        }

        if (!Array.isArray(scores) || scores.length !== surveyQuestions.length) {

            return false;
        }

        for (const score of scores) {

            if (typeof score !== 'string' || score.length === 0) {

                return false;
            }
        }

        return true;
    }

    clearInputFields() {

        this.nameInputElement.val("");

        this.photoInputElement.val("");

        for (const selectElement of this.selectElements) {

            selectElement.val("");
        }
    }

    showFriendMatchModal(name, photo, percentageMatch) {

        this.matchNameElement.text(name);

        this.matchPhotoElement.attr("src", photo);

        this.percentageMatchElement.text(percentageMatch);

        const modalOptions =
        {
            fadeDuration: 1000,
            fadeDelay: 0.50
        };

        this.friendMatchModalElement.modal(modalOptions).promise().then(() => {

            setTimeout(() => {

                $(".close-modal").one("click", () => {

                    location.reload();
                });

            }, 1000);
        });
    }
} 