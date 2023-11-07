import { useState, useEffect } from "react";
import "./SeatingView.scss";

const SeatingView = ({ maxSeats = 1, setSeatsState, seatsState }) => {
  const [seats, setSeats] = useState(seatsState);

  useEffect(() => {
    if (maxSeats < seats?.length) {
      setSeats(seats.slice(0, maxSeats));
    }
  }, [maxSeats]);

  useEffect(() => {
    setSeatsState(seats);
  }, [seats]);

  const selectSeat = (seatNumber: number) => {
    const alreadySelected = seatsState.some((seat) => seat === seatNumber);
    if (alreadySelected) {
      setSeats(seats.filter((seat) => seat !== seatNumber));
    } else {
      if (maxSeats > seats?.length) setSeats([...seats, seatNumber]);
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row text-gray-800">
      <div className="w-full md:w-1/3 flex flex-col items-center my-4">
        <h2 className="text-xl font-medium mb-2">Planta Baja</h2>
        <div className="grid grid-cols-5 gap-2 w-72 p-2 border-gray-400 border rounded">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat" data-type="object">
            BA
          </div>
          <div className="seat" data-type="object">
            BA
          </div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat" data-type="object">
            E
          </div>
          <div className="seat" data-type="object">
            BA
          </div>
          <div className="seat" data-type="object">
            BA
          </div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat" data-type="object">
            PU
          </div>
          <div className="seat"></div>
          <div className="seat" data-type="object">
            TV
          </div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div
            className="seat"
            data-type="executive"
            data-selected={seatsState?.some((seat) => seat === 1)}
            onClick={() => selectSeat(1)}
          >
            01
          </div>
          <div
            className="seat"
            data-type="executive"
            data-selected={seatsState?.some((seat) => seat === 2)}
            onClick={() => selectSeat(2)}
          >
            02
          </div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div
            className="seat"
            data-type="executive"
            data-selected={seatsState?.some((seat) => seat === 3)}
            onClick={() => selectSeat(3)}
          >
            03
          </div>
          <div
            className="seat"
            data-type="executive"
            data-selected={seatsState?.some((seat) => seat === 4)}
            onClick={() => selectSeat(4)}
          >
            04
          </div>
          <div
            className="seat"
            data-type="executive"
            data-selected={seatsState?.some((seat) => seat === 5)}
            onClick={() => selectSeat(5)}
          >
            05
          </div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div
            className="seat"
            data-type="executive"
            data-selected={seatsState?.some((seat) => seat === 6)}
            onClick={() => selectSeat(6)}
          >
            06
          </div>
          <div
            className="seat"
            data-type="executive"
            data-selected={seatsState?.some((seat) => seat === 7)}
            onClick={() => selectSeat(7)}
          >
            07
          </div>
          <div
            className="seat"
            data-type="executive"
            data-selected={seatsState?.some((seat) => seat === 8)}
            onClick={() => selectSeat(8)}
          >
            08
          </div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div
            className="seat"
            data-type="executive"
            data-selected={seatsState?.some((seat) => seat === 9)}
            onClick={() => selectSeat(9)}
          >
            09
          </div>
          <div
            className="seat"
            data-type="executive"
            data-selected={seatsState?.some((seat) => seat === 10)}
            onClick={() => selectSeat(10)}
          >
            10
          </div>
          <div
            className="seat"
            data-type="not-available"
            data-selected={seatsState?.some((seat) => seat === 11)}
            onClick={() => selectSeat(11)}
          >
            11
          </div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div
            className="seat"
            data-type="executive"
            data-selected={seatsState?.some((seat) => seat === 12)}
            onClick={() => selectSeat(12)}
          >
            12
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 flex flex-col items-center my-4">
        <h2 className="text-xl font-medium mb-2">Planta Alta</h2>
        <div className="grid grid-cols-5 gap-2 w-72 p-2 border-gray-400 border rounded">
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 13)}
            onClick={() => selectSeat(13)}
          >
            13
          </div>
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 14)}
            onClick={() => selectSeat(14)}
          >
            14
          </div>
          <div className="seat" data-type="object">
            TV
          </div>
          <div
            className="seat"
            data-type="semibed"
            data-selected={seatsState?.some((seat) => seat === 15)}
            onClick={() => selectSeat(15)}
          >
            15
          </div>
          <div
            className="seat"
            data-type="not-available"
            data-selected={seatsState?.some((seat) => seat === 16)}
            onClick={() => selectSeat(16)}
          >
            16
          </div>
          <div
            className="seat"
            data-type="not-available"
            data-selected={seatsState?.some((seat) => seat === 17)}
            onClick={() => selectSeat(17)}
          >
            17
          </div>
          <div
            className="seat"
            data-type="not-available"
            data-selected={seatsState?.some((seat) => seat === 18)}
            onClick={() => selectSeat(18)}
          >
            18
          </div>
          <div className="seat"></div>
          <div className="seat" data-type="object">
            E
          </div>
          <div className="seat" data-type="object">
            E
          </div>
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 19)}
            onClick={() => selectSeat(19)}
          >
            19
          </div>
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 20)}
            onClick={() => selectSeat(20)}
          >
            20
          </div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat" data-type="object">
            E
          </div>
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 21)}
            onClick={() => selectSeat(21)}
          >
            21
          </div>
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 22)}
            onClick={() => selectSeat(22)}
          >
            22
          </div>
          <div className="seat" data-type="object">
            TV
          </div>
          <div
            className="seat"
            data-type="semibed"
            data-selected={seatsState?.some((seat) => seat === 23)}
            onClick={() => selectSeat(23)}
          >
            23
          </div>
          <div
            className="seat"
            data-type="not-available"
            data-selected={seatsState?.some((seat) => seat === 24)}
            onClick={() => selectSeat(24)}
          >
            24
          </div>
          <div
            className="seat"
            data-type="not-available"
            data-selected={seatsState?.some((seat) => seat === 25)}
            onClick={() => selectSeat(25)}
          >
            25
          </div>
          <div
            className="seat"
            data-type="not-available"
            data-selected={seatsState?.some((seat) => seat === 26)}
            onClick={() => selectSeat(26)}
          >
            26
          </div>
          <div className="seat"></div>
          <div
            className="seat"
            data-type="not-available"
            data-selected={seatsState?.some((seat) => seat === 27)}
            onClick={() => selectSeat(27)}
          >
            27
          </div>
          <div
            className="seat"
            data-type="semibed"
            data-selected={seatsState?.some((seat) => seat === 28)}
            onClick={() => selectSeat(28)}
          >
            28
          </div>
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 29)}
            onClick={() => selectSeat(29)}
          >
            29
          </div>
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 30)}
            onClick={() => selectSeat(30)}
          >
            30
          </div>
          <div className="seat"></div>
          <div
            className="seat"
            data-type="semibed"
            data-selected={seatsState?.some((seat) => seat === 31)}
            onClick={() => selectSeat(31)}
          >
            31
          </div>
          <div
            className="seat"
            data-type="semibed"
            data-selected={seatsState?.some((seat) => seat === 32)}
            onClick={() => selectSeat(32)}
          >
            32
          </div>
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 33)}
            onClick={() => selectSeat(33)}
          >
            33
          </div>
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 34)}
            onClick={() => selectSeat(34)}
          >
            34
          </div>
          <div className="seat" data-type="object">
            TV
          </div>
          <div
            className="seat"
            data-type="semibed"
            data-selected={seatsState?.some((seat) => seat === 35)}
            onClick={() => selectSeat(35)}
          >
            35
          </div>
          <div
            className="seat"
            data-type="semibed"
            data-selected={seatsState?.some((seat) => seat === 36)}
            onClick={() => selectSeat(36)}
          >
            36
          </div>
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 37)}
            onClick={() => selectSeat(37)}
          >
            37
          </div>
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 38)}
            onClick={() => selectSeat(38)}
          >
            38
          </div>
          <div className="seat"></div>
          <div
            className="seat"
            data-type="not-available"
            data-selected={seatsState?.some((seat) => seat === 39)}
            onClick={() => selectSeat(39)}
          >
            39
          </div>
          <div
            className="seat"
            data-type="not-available"
            data-selected={seatsState?.some((seat) => seat === 40)}
            onClick={() => selectSeat(40)}
          >
            40
          </div>
          <div
            className="seat"
            data-type="not-available"
            data-selected={seatsState?.some((seat) => seat === 41)}
            onClick={() => selectSeat(41)}
          >
            41
          </div>
          <div
            className="seat"
            data-type="bed"
            data-selected={seatsState?.some((seat) => seat === 42)}
            onClick={() => selectSeat(42)}
          >
            42
          </div>
          <div className="seat"></div>
          <div
            className="seat"
            data-type="semibed"
            data-selected={seatsState?.some((seat) => seat === 43)}
            onClick={() => selectSeat(43)}
          >
            43
          </div>
          <div
            className="seat"
            data-type="semibed"
            data-selected={seatsState?.some((seat) => seat === 44)}
            onClick={() => selectSeat(44)}
          >
            44
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 flex flex-col items-center my-4">
        <h2 className="text-xl font-semibold mb-2">Referencias</h2>
        <div>
          <div className="flex items-center mb-2">
            <div
              className="seat seat-reference mr-2"
              data-selected="true"
            ></div>
            <span>Asiento seleccionado</span>
          </div>
          <div className="flex items-center mb-2">
            <div
              className="seat seat-reference mr-2"
              data-type="executive"
            ></div>
            <span>
              Ejecutivo <b>($22.500)</b>
            </span>
          </div>
          <div className="flex items-center mb-2">
            <div className="seat seat-reference mr-2" data-type="bed"></div>
            <span>
              Cama <b>($18.200)</b>
            </span>
          </div>
          <div className="flex items-center mb-2">
            <div className="seat seat-reference mr-2" data-type="semibed"></div>
            <span>
              Semicama <b>($16.700)</b>
            </span>
          </div>
          <div className="flex items-center mb-2">
            <div
              className="seat seat-reference mr-2"
              data-type="not-available"
            ></div>
            <span>Asiento ocupado</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="seat seat-reference mr-2" data-type="object">
              E
            </div>
            <span>Escalera</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="seat seat-reference mr-2" data-type="object">
              TV
            </div>
            <span>Televisión</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="seat seat-reference mr-2" data-type="object">
              BA
            </div>
            <span>Baño</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="seat seat-reference mr-2" data-type="object">
              PU
            </div>
            <span>Puerta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatingView;
