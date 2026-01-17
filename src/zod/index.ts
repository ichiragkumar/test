


Validation Error (400)


{
  "success": false,
  "error": "Invalid request schema",
}



Unauthorized (401)

{
  "success": false,
  "error": "Unauthorized, token missing or invalid"
}



Forbidden - Role Check (403)
{
  "success": false,
  "error": "Forbidden, teacher access required"
}



Forbidden - Ownership Check (403)
{
  "success": false,
  "error": "Forbidden, not class teacher"
}


Not Found (404)
{
  "success": false,
  "error": "Class not found"
}

or 

{
  "success": false,
  "error": "User not found"
}

or

{
  "success": false,
  "error": "Student not found"
}




In-Memory Attendance State

const activeSession = {
  classId: "c101", // current active class
  startedAt: "2025-03-11T10:00:00.000Z", // ISO string
  attendance: {
    "s100": "present",
    "s101": "absent"
    // studentId: status
  }
};


**mportant:**

- `startedAt` must be ISO string: `new Date().toISOString()`
- `attendance` object stores status for each student
- Only ONE session active at a time


