import type { FC } from 'react';
import type { Tenant } from 'types';
import Avatar from 'react-avatar';
import styles from './tenantItem.module.css';

interface TenantItemProps {
  item: Tenant;
}

export const TenantItem: FC<TenantItemProps> = ({ item }) => {
  const tenantItemHeadClass = item.status
    ? styles.tenantItemHead
    : styles.tenantItemEmptyHead;

  return (
    <div className={styles.tenantItem}>
      <div className={tenantItemHeadClass}>
        <Avatar size="42" round name={item.code} />
        <div>
          <div>
            Id: <strong>{item.id}</strong>
          </div>
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
      {item.description && <div>{`${item.description?.substr(0, 98)}...`}</div>}
    </div>
  );
};
