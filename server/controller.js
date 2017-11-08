module.exports = {
  getPlanes: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_planes()
      .then(messages => res.status(200).send(messages))
      .catch(error => console.log('error', error))
  },

  addPlane: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.add_plane(req.body)
      .then(messages => res.status(200).send(messages))
      .catch(error => console.log('error', error))
  },

  erase: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.erase(req.body)
      .then(messages => res.status(200).send(messages))
      .catch(error => console.log('error', error))
  },
}
