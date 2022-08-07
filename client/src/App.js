...
const [activities, setActivities] = useState([]);
...

...
<main className="app-main">
<h2>Today</h2>

{activities && activities.length > 0 ? (
  <ol>
    {activities.map((activity) => (
      <li key={activity._id}>
        {activity.name} - {activity.time}
      </li>
    ))}
  </ol>
) : (
  <p>No activities yet</p>
)}
</main>
...
