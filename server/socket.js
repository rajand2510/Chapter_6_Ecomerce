// socket.js
const viewers = {};

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('view_product', (productId) => {
      if (!viewers[productId]) viewers[productId] = new Set();
      viewers[productId].add(socket.id);
      io.emit('viewer_count', {
        productId,
        count: viewers[productId].size,
      });
    });

    socket.on('leave_product', (productId) => {
      if (viewers[productId]) {
        viewers[productId].delete(socket.id);
        io.emit('viewer_count', {
          productId,
          count: viewers[productId].size,
        });
      }
    });

    socket.on('disconnect', () => {
      for (let productId in viewers) {
        viewers[productId].delete(socket.id);
        io.emit('viewer_count', {
          productId,
          count: viewers[productId].size,
        });
      }
      console.log('Client disconnected:', socket.id);
    });
  });
};
