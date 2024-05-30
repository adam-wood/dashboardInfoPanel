# dashboardInfoPanel
A quick and dirty way to show a rotating list of items (news/tips etc) in browser on a large screen.

![Screenshot](https://github.com/adam-wood/dashboardInfoPanel/blob/master/screenshot.png?raw=true "Screenshot")

# Instructions
1. Download the files and open list.html
2. Hit refresh a few times until the page contents change. (There is a function which randomly picks an item on page refresh)
3. Once familiar with the concept, go and edit list.json and replace with your own content
4. Logo, fonts and colours can all be changed by editing list.html

# Tips
- You can use emoji as a quick way to liven up the screen
- If you are creating your own content, you can source icons from [The Noun Project](https://thenounproject.com/)
- This can work great if used in conjunction with a browser extension that can rotate through tabs eg [Tab Rotate](https://chrome.google.com/webstore/detail/tab-rotate/pjgjpabbgnnoohijnillgbckikfkbjed?hl=en-GB)
- You can have multiple lists in different tabs, just be sure to place them in different parent folders

- # Troubleshooting
- If you are not hosting on a server, but just on a file system you may have CORS errors. If so, please grab the files from [this earlier version](https://github.com/adam-wood/dashboardInfoPanel/tree/2f2f11019b0d25324823da9ddb1e7060fe0aa846)

# ToDo
- [ ] Find a better way to store and parse the list items so they are easy to update (eg CSV) 
- [ ] Improve the function (~line 117) that splits the json items so it can handle line breaks, lists etc better
- [ ] Set up a debug mode to loop through all items instead of picking one at random
- [ ] Set up an optional mode that can proceed through all items in sequence and then loop to beginning
