# Dicussion 2 - Use an AI Chatbot to create a JavaScript program

I used GitHub's Copilot on VS Code with the prompt above. I wrote the baseline HTML before start the prompt. Once the HTML was completed, I added the script element and wrote the requirements as comments. As I was writing the comments, Copilot was predicting more of what was needed correctly even before I was halfway done. After giving it a few seconds, it provided the following:

```javascript
<script>
    function checkPassword() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    let criteria = [];
    let isValid = true;
    if (!/[A-Z]/.test(password)) {
        criteria.push("Password should contain at least one capital letter");
        isValid = false;
    }
    if (!/[0-9]/.test(password)) {
        criteria.push("Password should contain at least one numeric digit");
        isValid = false;
    }
    if (!/[!@#$&]/.test(password)) {
        criteria.push(
        "Password should contain at least one special character from !, @, #, $, &"
        );
        isValid = false;
    }
    if (isValid) {
        message.innerHTML = "Your password is valid.";
    } else {
        message.innerHTML =
        "Your password is invalid. The following criteria failed: <br/>" +
        criteria.join("<br/>") +
        "<br/>Please try again.";
    }
    }
</script>
```

Copilot generated working code.

First thing I noticed was it was using ES 6 standards (let instead of var), an array was created to test each password requirement, and a boolean defaulted as true and turns to false if any requirements fails.

Luckily my background in Python and some JavaScript allowed me follow it, until this portion of the if condition: `if (!/[A-Z]/.test(password)`

I had to look up what the `/{]/` portion did after the bang. After a bit of research, I learned it's a regular expression.
