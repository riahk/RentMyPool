var ConfirmationContent = React.createClass({

  getInitialState: function () {
    return {
      bookings: []
    };
  },

  componentWillMount: function () {
    var self = this;
    $.ajax({
      url: "/userBookings",
      contentType: "application/json",
      method: "GET",
      statusCode: {
        200: function (data) {
            self.setState({
              bookings: data.results
            });

        }
      }
    });
  },

  render: function () {
    var userBookings = this.state.bookings.map(function (item, index){
      return (
        <UserBooking key={index} booking={item} />
      );
    });

    return(
      <div className="bookingCon h4book">
        <h1 className="h4book">Booking Confirmed!</h1>
        <h3 className="h4book">{userBookings.length} Current Bookings</h3>
        {userBookings}
      </div>
    );
  }

});