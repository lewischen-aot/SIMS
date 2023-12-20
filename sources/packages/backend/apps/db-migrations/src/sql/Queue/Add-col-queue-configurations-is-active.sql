ALTER TABLE
  sims.queue_configurations
ADD
  COLUMN "is_active" BOOLEAN NOT NULL DEFAULT TRUE;

COMMENT ON COLUMN queue_configurations.is_active IS 'This field decides whether the queue is active or not, only active queues are shown in the bull dashboard.';