import { useMemo, useState } from "react";

export type BookingProfessional = {
  id: string;
  name: string;
};

type BookingWidgetProps = {
  professionals: BookingProfessional[];
};

const slotsByProfessional: Record<string, string[]> = {
  fabian: ["09:30", "11:00", "13:30", "16:00"],
  mateo: ["10:00", "12:00", "15:30", "18:00"],
  enzo: ["09:00", "11:30", "14:30", "17:30"],
};

const fallbackSlots = ["10:00", "12:30", "16:30"];

export default function BookingWidget({ professionals }: BookingWidgetProps) {
  const [selectedProfessional, setSelectedProfessional] = useState(professionals[0]?.id ?? "");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const slots = useMemo(() => {
    if (!selectedProfessional) {
      return fallbackSlots;
    }
    return slotsByProfessional[selectedProfessional] ?? fallbackSlots;
  }, [selectedProfessional]);

  const selectedProfessionalName = useMemo(() => {
    const found = professionals.find((pro) => pro.id === selectedProfessional);
    return found?.name ?? "";
  }, [professionals, selectedProfessional]);

  const canConfirm = selectedProfessional && selectedDate && selectedTime;

  const whatsappMessage = encodeURIComponent(
    `Hola Invictus, quiero reservar turno con ${selectedProfessionalName} para ${selectedDate} a las ${selectedTime}.`
  );

  return (
    <div className="booking-shell">
      <div className="booking-column">
        <h3>1. Seleccionar profesional</h3>
        <div className="chip-row">
          {professionals.map((pro) => (
            <button
              type="button"
              key={pro.id}
              onClick={() => {
                setSelectedProfessional(pro.id);
                setSelectedTime("");
              }}
              className={`chip ${selectedProfessional === pro.id ? "chip-active" : ""}`}
            >
              {pro.name}
            </button>
          ))}
        </div>

        <h3>2. Seleccionar fecha</h3>
        <input
          type="date"
          className="booking-input"
          value={selectedDate}
          onChange={(event) => {
            setSelectedDate(event.target.value);
            setSelectedTime("");
          }}
        />

        <h3>3. Horarios disponibles</h3>
        <div className="chip-row">
          {slots.map((slot) => (
            <button
              type="button"
              key={slot}
              onClick={() => setSelectedTime(slot)}
              className={`chip ${selectedTime === slot ? "chip-active" : ""}`}
            >
              {slot}
            </button>
          ))}
          {slots.length === 0 && <p className="helper-text">No hay horarios para este profesional.</p>}
        </div>
      </div>

      <aside className="booking-summary">
        <p className="summary-kicker">Resumen de reserva</p>
        <ul>
          <li>
            <span>Profesional</span>
            <strong>{selectedProfessionalName || "Pendiente"}</strong>
          </li>
          <li>
            <span>Fecha</span>
            <strong>{selectedDate || "Pendiente"}</strong>
          </li>
          <li>
            <span>Hora</span>
            <strong>{selectedTime || "Pendiente"}</strong>
          </li>
        </ul>

        {canConfirm ? (
          <a
            className="btn btn-primary block"
            href={`https://wa.me/595981000000?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Confirmar turno
          </a>
        ) : (
          <button type="button" className="btn btn-muted block" disabled>
            Confirmar turno
          </button>
        )}
      </aside>
    </div>
  );
}
