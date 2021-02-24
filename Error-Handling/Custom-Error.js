class CustomError extends Error {
  constructor(msg) {
    super(msg);
    if (Error.CaptureStackTrace) {
      Error.CaptureStackTrace(this, CustomError);
    }
  }
}

try {
  console.log('I am Actual Message');
  throw new Error('I am the Error');
  console.log('I am the un-executable message');
} catch(e) {
  console.dir(e);
} finally {
  console.log('I am always doing work');
}