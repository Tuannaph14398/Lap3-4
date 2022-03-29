import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      id: 1,
      name: 'Nguyễn Anh Tuấn',
      age: 20,
      phone: '09649905982',
      avatar: "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/272453612_1634098326930825_9139657817904344718_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BCMyGzpubxwAX-fHt-8&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-X9fHilL5MjHhBTVHkK6IY8a9SCWCzIrTpwO21SpE0-g&oe=622ED284"
    },
    {
      id: 2,
      name: 'Nguyễn Minh Quân',
      age: 22,
      phone: '0392871868',
      avatar: "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/272453612_1634098326930825_9139657817904344718_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BCMyGzpubxwAX-fHt-8&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-X9fHilL5MjHhBTVHkK6IY8a9SCWCzIrTpwO21SpE0-g&oe=622ED284"
    },
    {
      id: 3,
      name: 'Nguyễn Ngọc Dương',
      age: 24,
      phone: '0392871868',
      avatar: "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/272453612_1634098326930825_9139657817904344718_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BCMyGzpubxwAX-fHt-8&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-X9fHilL5MjHhBTVHkK6IY8a9SCWCzIrTpwO21SpE0-g&oe=622ED284"
    },
  ]
  // Định nghĩa 1 mảng trung gian để lưu kết quả search
  // Để ko bị ảnh hưởng đến giá trị của mảng gốc
  usersFilter = this.users;

  // Định nghĩa hàm xóa khi click nút delete
  remove(userID: number){
    // this.urers ~ thuộc tính users của class UserComponent
    this.usersFilter = this.usersFilter.filter(function(user){
      return user.id !== userID;
    })
  }

  // Định nghĩa hàm Search sau khi nhập vào ô input
  onSearch(event: any){
    // 1. Xử lý việc tìm kiếm chữ hoa chữ thường
    // dưa cả value và name ve chữa thường
    // 2. Khoảng trắng đầu và cuối value của input
    // sử dụng phương thức .trim()
    const value = event.target.value;
    const lowerCaseInputValue = value.toLowerCase();
    const lowerCaseTrimInputValue = lowerCaseInputValue.trim();
    console.log(lowerCaseTrimInputValue);
    
    // Gán cho usersFilter để ko thay đổi users gốc nữa
    // Để hiển thị danh sách theo usersFilter
    this.usersFilter = this.users.filter(function(user){
      const lowerCaseUserName  = user.name.toLowerCase();
      return lowerCaseUserName.indexOf(lowerCaseTrimInputValue) !== -1;
    })
  }

  // Thêm mới user
  // 1. Định nghĩa 1 ojb newUser trung gian
  // nhận giá trị input đầu vào, sau khi sumbit sẽ gán vào giá trị gốc
  newUser = {
    id: 0,
    name: '',
    age: 0,
    phone: '',
    avatar: ''
  };
  onChange(event: any, key: string){
    //id: this.users.length + 1, // để lại khi sumbit 1 lần
    this.newUser = {
      ...this.newUser,
      [key]: event.target.value
    };
    console.log(this.newUser);
  };

  onSumbit(){
    // 0. Validate
    if (!this.onValidate(this.newUser)) {
      // thông báo
      return; 
    }

    // 1.1, Kiểm tra xem có phải đang sửa ko
    if (this.isEdit) {
      // gán giá trị cho mảng
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.newUser.id) {
          this.users[i] = this.newUser;
        }
      }
      // Đưa isEdit về gái trị gốc là false để có thể thêm mới
      this.isEdit = false;
    }else{
      // 1.2, Gán thêm id bằng độ dài mảng +1
      this.newUser.id = this.users.length + 1;
      // 2. Push phần tử mới vào mảng users
      this.users.push(this.newUser);
    }

    // 3, Gán lại giá trị gốc cho newUser
    this.newUser = {
      id: 0,
      name: '',
      age: 0,
      phone: '',
      avatar: ''
    };
  }

  onValidate(obj: any){
    if (!obj.name || !obj.age || obj.age <= '0' || !obj.phone || !obj.avatar) {
      // thay vì vt như thế này: if (obj.name !== '' || obj.age !== '' || obj.phone !== '0' .......)
      return false;
    }
    return true;
  }

  // Sửa
  // Mặc định sẽ ko pahir đang sửa
  isEdit = false;
  onEdit(obj: any){
    // gán dữ liệu cần sửa vào newUser
    this.newUser = obj;
    // Chuyển trạng thái thành sửa
    this.isEdit = true;
    // sau đó sẽ sử lý tiếp ô onSumbit nếu isEdit true
  }

}
