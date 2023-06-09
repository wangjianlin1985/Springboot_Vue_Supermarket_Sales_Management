package com.lewis.base.entity;

import java.io.Serializable;

public class Orders implements Serializable {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column orders.id
     *
     * @mbg.generated
     */
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column orders.shoplist
     *
     * @mbg.generated
     */
    private String shoplist;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column orders.total
     *
     * @mbg.generated
     */
    private String total;
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column orders.ctime
     *
     * @mbg.generated
     */
    private String ctime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column orders.uid
     *
     * @mbg.generated
     */
    private Integer uid;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table orders
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column orders.id
     *
     * @return the value of orders.id
     *
     * @mbg.generated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column orders.id
     *
     * @param id the value for orders.id
     *
     * @mbg.generated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column orders.shoplist
     *
     * @return the value of orders.shoplist
     *
     * @mbg.generated
     */
    public String getShoplist() {
        return shoplist;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column orders.shoplist
     *
     * @param shoplist the value for orders.shoplist
     *
     * @mbg.generated
     */
    public void setShoplist(String shoplist) {
        this.shoplist = shoplist == null ? null : shoplist.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column orders.total
     *
     * @return the value of orders.total
     *
     * @mbg.generated
     */
    public String getTotal() {
        return total;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column orders.total
     *
     * @param total the value for orders.total
     *
     * @mbg.generated
     */
    public void setTotal(String total) {
        this.total = total == null ? null : total.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column orders.ctime
     *
     * @return the value of orders.ctime
     *
     * @mbg.generated
     */
    public String getCtime() {
        return ctime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column orders.ctime
     *
     * @param ctime the value for orders.ctime
     *
     * @mbg.generated
     */
    public void setCtime(String ctime) {
        this.ctime = ctime == null ? null : ctime.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column orders.uid
     *
     * @return the value of orders.uid
     *
     * @mbg.generated
     */
    public Integer getUid() {
        return uid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column orders.uid
     *
     * @param uid the value for orders.uid
     *
     * @mbg.generated
     */
    public void setUid(Integer uid) {
        this.uid = uid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table orders
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", shoplist=").append(shoplist);
        sb.append(", total=").append(total);
        sb.append(", ctime=").append(ctime);
        sb.append(", uid=").append(uid);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}