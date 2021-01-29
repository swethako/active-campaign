# This is a coding challenge UI

Donation form for an upcoming event!

## Prerequisites

1. A basic understanding of [Git](https://git-scm.com/) and [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
2. [NodeJS v10.15.0](https://nodejs.org/en/blog/release/v10.15.0/) installed on your machine.

## Getting started

To download the code repository for the first time:

```
git clone https://github.com/swethako/active-campaign.git
cd active-campaign/
npm install
```

To run the development environment:

```
npm start
```

### `Description of the application`

1. Application to accept Donations starting from 5$ until donation reaches to $5000.

2. Based on the donation of each person, upon click on the 'Give Now' button or the "Enter" key from the keyboard, the application updates the total amount in the label.

3. The Progress bar indicates the progress of the total donations of the Donation form.

4. Untill the goal reaches to $5000 the text will be "$(5000 - donation Amount) still needed to fund this project".
   EX : If a first donar submits the 10$ then the text changes to reflect that is "$4990 still needed to fund this project"
   ans so on.

5. Once the goal of $5000 reaches then the text changes to reflect that it is "$5,000 Successfully reached our goal.".

6. Once the donation funds reaches more than $5000 then the text changes to reflect that it is "$(5,000 + extra donation amount) Successfully reached our goal with an extra donation of  $(extra donation amount)".

   Ex: If the donation funds are $5365 then the text changes to reflect that it is "$5,365 Successfully reached our goal with an extra donation of \$365. "

7. The total number of donors are updated in the description field.(Donar or Donars based on the count of donors)

   Ex i:
   Incase if 0 donar is there then the description will be "Join the 0 other donor who have already supported this project."

   Ex ii:
   Incase if 1 donar is there then the description will be "Join the 1 other donor who have already supported this project."

   Ex iii:
   Incase if 2 donors then the description will be "Join the 2 other donors who have already supported this project."

   and so on.

8. An error message displays and 'Give Now' button disables if the donation amount is less than \$5 or empty and a success message displayed if the donation is successful.

9. Upon Successful submission of the donation, Donar can able to see the success message in the bottom of the input field and that sucees message will goway after 3 sec.

10. The application is compatible with Mobile devices, Tablet and Desktop.

11. A Donar can control the application through the keyboard and mouse too.

12. There is a auto focus on the input field.

13. A donar can press on the enter key (in the Key board) to submit the donation amount after entered the donation Amount in the input field or a donar can click on the 'Give Now' button too to submit the donation.

    ### please Uncomment and comment the changes which i have mentioned in the code to see howmany days left and to see the expiry page.

14. Added the Expiry date to the application, Based on the diffrence between the current date and expiry date , the application of the heading will change.
    Ex1 : If 4 days left then heading will be "Only four days left to fund this project".
    Ex2 : If 3 days left then heading will be "Only Three days left to fund this project".
    Ex3 : If 2 days left then heading will be "Only Two days left to fund this project".
    Ex4 : If 1 day left then heading will be "Only one day left to fund this project".(In this case 1 day is a singular so the heading will be "Only one day left to fund this project")
    Ex5 : If 0 day or page has expired then heading will be "This page has expired."
    Note : Once page gets expired then Input field and button will be disabled.

15. A Donar can not able to enter the any special characters in the input field.

16. Have used scss for styling the application.

17. A Donar can able to navigate to input and button field by clicking on tab from the keyborad.
