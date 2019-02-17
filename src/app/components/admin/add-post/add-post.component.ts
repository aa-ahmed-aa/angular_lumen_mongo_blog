import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import { PostService } from '../../../services/post/post.service';
import { AdminService } from '../../../services/admin/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {

  private username = 'ahmedkhaled';
  private password = 'a7med55aled';
  private tinymceInit;

  form = new FormGroup({
    title: new FormControl(),
    sub_url: new FormControl(),
    html: new FormControl(),
    category: new FormControl(),
    auther: new FormControl(),
    cover_image: new FormControl(),
    active: new FormControl()
  });

  constructor(
      private adminService: AdminService,
      private router: Router
      ) { }

  ngOnInit() {
    this.tinymceInit = {
      plugins : [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern'
      ],
      toolbar : 'formatselect | bold italic strikethrough forecolor backcolor | link ' +
          '| alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat |image',
      image_advtab : true,
      file_picker_callback : function(cb, value, meta) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        // Note: In modern browsers input[type="file"] is functional without
        // even adding it to the DOM, but that might not be the case in some older
        // or quirky browsers like IE, so you might want to add it to the DOM
        // just in case, and visually hide it. And do not forget do remove it
        // once you do not need it anymore.

        input.onchange = function() {
          var file = input.files[0];

          var reader = new FileReader();
          reader.onload = function () {
            // Note: Now we need to register the blob in TinyMCEs image blob
            // registry. In the next release this part hopefully won't be
            // necessary, as we are looking to handle it internally.
            var id = 'blobid' + (new Date()).getTime();
            var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
            var base64 = reader.result.split(',')[1];
            var blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);

            // call the callback and populate the Title field with the file name
            cb(blobInfo.blobUri(), { title: file.name });
          };
          reader.readAsDataURL(file);
        };

        input.click();
      }
    }
  }

  addPost() {
    this.adminService.add_post(this.form.value);
    this.router.navigate(['/post/' + this.form.value.sub_url]);
  }

}
