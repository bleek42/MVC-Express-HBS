const logSubmit = (event) => console.log(event);

const form = document.getElementById('upload-file');

form.addEventListener('submit', async (event) => {
  console.log('submitting upload', event?.target);
  const formData = new FormData(form);
  console.table(formData);
  const req = {
    headers: {
      Authorization: 'sfndjkasdnfgkjsdmvgblskdfgldf453463ew4',
    },
  };

  formData.append();
  try {
    const res = await fetch('/dist');
  } catch (err) {
    console.error(err);
  }
});
