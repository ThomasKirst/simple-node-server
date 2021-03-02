function customerForm(request, response) {
  response.send(`
    <h1>Add a new customer</h1>  
    <form action="/customers" method="POST">
      <input type="text" name="firstname" placeholder="Enter your first name">
      <input type="text" name="lastname" placeholder="Enter your last name">
      <input type="text" name="email" placeholder="Enter your email address">
      <button>Add customer</button>
    </form>
  `);
}

function postCustomer(request, response) {
  const { firstname, lastname, email } = request.body;
  response.send(`
    <h1>A new customer was added</h1>
    <p>First name: ${firstname}</p>
    <p>Last name: ${lastname}</p>
    <p>Email address: ${email}</p>
    <a href="/customers">Back to form</a>
  `);
}

exports.customerForm = customerForm;
exports.postCustomer = postCustomer;
