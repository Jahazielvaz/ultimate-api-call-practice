$(() => {
  let form = $("#form1");
  let output = $("#user-output");
  let data = JSON.parse(form.val())

  form.on('submit', (e) => {
    $.ajax({
      type: 'POST',
      data: data,
      contentType: 'application/json',
      success: () => {
        console.log(response.json(data))

      }
    })
    e.preventDefault()
  })

})
