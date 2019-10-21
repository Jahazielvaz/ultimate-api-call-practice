$(() => {
  let userOutput = $("#user-output");
  let form1 = $("#form1");

  form1.on('submit', (e) => {
    let info = $("form input").val();
    let data = {stuff: info};
    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: () => {
        userOutput.html(data.stuff)
        console.log(data.stuff.email)
      }
    }) //End of ajax

  }) //End of form one







}) //End of jQuery
