import React from 'react'

const StatusBadge = () => {
  return (
      <div className="flex flex-col sm:flex-row sm:gap-12">
          <div className="flex gap-1 items-center">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="text-xs text-muted-foreground line-clamp-1">
                  Active
              </p>
          </div>
          <div className="flex gap-1 items-center">
              <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
              <p className="text-xs text-muted-foreground">Open to Collaborations</p>
          </div>
          <div className="flex gap-1 items-center">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <p className="text-xs text-muted-foreground">Archived</p>
          </div>
      </div>
  );
}

export default StatusBadge