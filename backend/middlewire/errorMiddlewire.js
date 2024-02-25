// there are two typers of custom error handler. 
// the first one is - if any user searches for a route (url), which is not existed
// the second one is - if any user searches by a correct route but that route has errors



// the  first one 


const notFound = (req,res,next) => {
   const error = new Error(`Not found - ${req.originalUrl}`)
   res.status(404)
   next(error)
}  // here, next is the callback for providing the error.


const errorHandler = (err, req, res, next) => {
   let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
   let message = err.message;
 
   // If Mongoose not found error, set to 404 and change message
   if (err.name === 'CastError' && err.kind === 'ObjectId') {
     statusCode = 404;
     message = 'Resource not found';
   }
 
   res.status(statusCode).json({
     message: message,
     stack: process.env.NODE_ENV === 'production' ? null : err.stack,
   });
 };
 
 export { notFound, errorHandler };