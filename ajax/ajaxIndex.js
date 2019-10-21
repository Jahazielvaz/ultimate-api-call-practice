$(() => {
  let userOutput = $("#user-output");
  let form1 = $("#form1");

  form1.on('submit', (e) => {
    let info = $("#name").val();
    let data = {stuff: info};

    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: '/',
      data: data,
      // dataType: 'application/json',
      success: () => {
        location.reload(true)
        console.log(data)
      }
    }) //End of ajax

  }) //End of form one







}) //End of jQuery
