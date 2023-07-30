const createForm = () => {
  let template = `
    <form name="myForm" id="myForm" action="" method="GET">
        <li class="formInfo">
            <label for="name"></label>
            <input type="text" id="name" name="name" placeholder="Name"/>
        </li>
        <li class="formInfo">
            <label for="email"></label>
            <input type="email" id="email" name="email" placeholder="Email"/>
        </li>
        <li class="formInfo">
            <label for="message"></label>
            <textarea id="message" name="message" placeholder="Message"></textarea>
        </li>
        <button type="submit" id="submitBtn">Submit</button>
    </form>
    `;
  let formDiv = document.getElementById("contactForm");
  formDiv.innerHTML = template;
};

export { createForm };
