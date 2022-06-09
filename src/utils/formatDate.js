
export default function FormatDate({ date }) {
	return (date.toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' }))
}
