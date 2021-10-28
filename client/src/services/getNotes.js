export default function getNotes() {
  return fetch('/api/notes').then(res => res.json())
}
