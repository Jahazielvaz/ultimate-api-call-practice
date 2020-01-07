const requests = {
  getAllLandscapes: {
    type: 'GET',
    url: 'localhost:3000/landscapes',
  },
  getASingleLandscape: {
    type: 'GET',
    url: 'localhost:3000/landscapes/',
    info: 'Include a landscape ID at the end of the url'
  },
  postLandscape: {
    type: 'POST',
    url: 'localhost:3000/landscapes',
    body: {
      name: 'STRING, required',
      location: 'STRING, required',
      description: 'STRING, required'
    }
  },
  updateLandscape: {
    type: 'PATCH',
    url: 'localhost:3000/landscapes',
    body: {
      name: 'STRING',
      location: 'STRING',
      description: 'STRING'
    }
  },
  deleteLandscape: {
    type: 'DELETE',
    url: 'localhost:3000/landscapes',
    info: 'Include the landscape ID at the end of the url following a /'
  }
} //End of requests

module.exports = requests;
