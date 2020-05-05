import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import User from './User';
import Notification from './Notification';

@Entity('notifications_receivers')
class NotificationReceiver {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  notification_id: string;

  @ManyToOne(() => Notification)
  @JoinColumn({ name: 'notification_id' })
  notification: Notification;

  @Column('uuid')
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column('integer')
  is_active: number;
}

export default NotificationReceiver;
