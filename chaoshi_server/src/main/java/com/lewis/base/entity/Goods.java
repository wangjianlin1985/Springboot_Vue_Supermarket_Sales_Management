package com.lewis.base.entity;

import java.io.Serializable;

public class Goods implements Serializable {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column goods.id
     *
     * @mbg.generated
     */
    private Integer id;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column goods.name
     *
     * @mbg.generated
     */
    private String name;
    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column goods.num
     *
     * @mbg.generated
     */
    private Integer num;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column goods.price
     *
     * @mbg.generated
     */
    private String price;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column goods.img
     *
     * @mbg.generated
     */
    private String img;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table goods
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column goods.id
     *
     * @return the value of goods.id
     *
     * @mbg.generated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column goods.id
     *
     * @param id the value for goods.id
     *
     * @mbg.generated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column goods.name
     *
     * @return the value of goods.name
     *
     * @mbg.generated
     */
    public String getName() {
        return name;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column goods.name
     *
     * @param name the value for goods.name
     *
     * @mbg.generated
     */
    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column goods.num
     *
     * @return the value of goods.num
     *
     * @mbg.generated
     */
    public Integer getNum() {
        return num;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column goods.num
     *
     * @param num the value for goods.num
     *
     * @mbg.generated
     */
    public void setNum(Integer num) {
        this.num = num;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column goods.price
     *
     * @return the value of goods.price
     *
     * @mbg.generated
     */
    public String getPrice() {
        return price;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column goods.price
     *
     * @param price the value for goods.price
     *
     * @mbg.generated
     */
    public void setPrice(String price) {
        this.price = price == null ? null : price.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column goods.img
     *
     * @return the value of goods.img
     *
     * @mbg.generated
     */
    public String getImg() {
        return img;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column goods.img
     *
     * @param img the value for goods.img
     *
     * @mbg.generated
     */
    public void setImg(String img) {
        this.img = img == null ? null : img.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table goods
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
        sb.append(", name=").append(name);
        sb.append(", num=").append(num);
        sb.append(", price=").append(price);
        sb.append(", img=").append(img);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}