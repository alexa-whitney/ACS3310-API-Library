class TrebekTools {
    constructor() {
      this.baseURL = 'http://jservice.io/api';
    }
  
    // Method to fetch random questions
    async getRandomQuestions(count = 1) {
      try {
        const response = await fetch(`${this.baseURL}/random?count=${count}`);
        if (!response.ok) {
          throw new Error('Failed to fetch random questions.');
        }
        return response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  
    // Method to fetch final jeopardy questions
    async getFinalQuestions(count = 1) {
      try {
        const response = await fetch(`${this.baseURL}/final?count=${count}`);
        if (!response.ok) {
          throw new Error('Failed to fetch final jeopardy questions.');
        }
        return response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  
    // Method to fetch categories
    async getCategories(count = 10) {
      try {
        const response = await fetch(`${this.baseURL}/categories?count=${count}`);
        if (!response.ok) {
          throw new Error('Failed to fetch categories.');
        }
        return response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }
  
  // Instantiate the class
  const jeopardy = new TrebekTools();
  
  // Functions to display data in the HTML
  function getRandomQuestions() {
    jeopardy
      .getRandomQuestions(5)
      .then((questions) => {
        const display = questions.map(
          (q) => `<p><strong>Question:</strong> ${q.question}</p>
                  <p><strong>Answer:</strong> ${q.answer}</p><hr>`
        );
        document.getElementById("randomQuestions").innerHTML = display.join("");
        document.getElementById("randomQuestions").style.display = "block";
      })
      .catch((error) => console.error(error));
  }
  
  function getFinalQuestions() {
    jeopardy
      .getFinalQuestions(1)
      .then((question) => {
        const display = `<p><strong>Question:</strong> ${question[0].question}</p>
                         <p><strong>Answer:</strong> ${question[0].answer}</p>`;
        document.getElementById("finalQuestions").innerHTML = display;
        document.getElementById("finalQuestions").style.display = "block";
      })
      .catch((error) => console.error(error));
  }
  
  function getCategories() {
    jeopardy
      .getCategories(10)
      .then((categories) => {
        const display = categories
          .map((cat) => `<p>${cat.title}</p>`)
          .join("");
        document.getElementById("categories").innerHTML = display;
        document.getElementById("categories").style.display = "block";
      })
      .catch((error) => console.error(error));
  }

  