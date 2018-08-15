import models from '../../database/models/index';

export default(req, res, next) => {
  const {
    gateNo, status, terminalNo, departureTime,
  } = req.body;
  const { flightId: flightNo } = req.params;

  models.Flights
    .update({
      gate: gateNo, status, terminal_no: terminalNo, departure_time: departureTime,
    }, { where: { flight_no: flightNo } })
    .then((result) => {
      if (result) {
        res.status(200).send({ succesfullyEdited: true });
      }
    }).catch(e => next(e));
};
