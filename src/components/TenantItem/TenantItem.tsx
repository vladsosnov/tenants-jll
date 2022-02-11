import type { FC } from 'react';
import type { Tenant } from 'types';
import Avatar from 'react-avatar';
import styles from './tenantItem.module.css';

interface TenantItemProps {
  item: Tenant;
}

export const TenantItem: FC<TenantItemProps> = ({ item }) => {
  return (
    <div className={styles.tenantItem}>
      <div className={styles.tenantItemHead}>
        <Avatar size="42" round name={item.code} />
        <div>
          {item.type && (
            <div>
              Type: <strong>{item.type.toLowerCase()}</strong>
            </div>
          )}
          {item.status && (
            <div>
              Status: <strong>{item.status.toLowerCase()}</strong>
            </div>
          )}
        </div>
      </div>
      <div>{`${item.description.substr(0, 98)}...`}</div>
    </div>
  );
};
