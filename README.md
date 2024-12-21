- Route: /notices
  Method: GET
  Sample Response:

```json
[
  {
    "id": 1,
    "date": "2024-12-23",
    "day": "Monday",
    "time": "8:30 AM",
    "notice": "Assignment Submission"
  }
]
```

- Route: /add-ct-announcement
  Method: POST
  Sample Payload:

```json
{
  "date": "2024-12-23",
  "day": "Monday",
  "time": "10:00 AM",
  "place": "Room 102",
  "course_id": "CSE3217",
  "topic": "Mobile Computing",
  "teacher_id": "1"
}
```
