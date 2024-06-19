import { _breakP } from './utils.js';

export default class map {
  constructor() {
    this.map();
  }

  map() {
    const $map = document.querySelectorAll('.js-map');
    if ($map.length) {
      // Google Mapで利用する初期設定用の変数
      var latlng = new google.maps.LatLng(35.750497, 139.682214);
      if (_breakP.SP) {
        var mapOptions = {
          zoom: 14.3,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: latlng
        };
      } else {
        var mapOptions = {
          zoom: 15.5,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: latlng
        };
      }
      // GoogleMapの生成
      var gmap = new google.maps.Map(document.getElementById("map-01"), mapOptions);

      // マーカー
      var markerData = [
        {
          lat: "35.750497",
          lng: "139.682214",
          title: "プラウド小竹向原",
          icon: "./imgs/icon/icon-prot-mantion.png"
        }, {
          lat: "35.74957480205748",
          lng: "139.68061296954878",
          title: "ファミリーマート 小茂根二丁目店",
          icon: "./imgs/icon/icon-1.png"
        }, {
          lat: "35.75063751606463",
          lng: "139.68525624071307",
          title: "セブンイレブン 板橋小茂根2丁目",
          icon: "./imgs/icon/icon-2.png"
        }, {
          lat: "35.75401329379232",
          lng: "139.68346424256356",
          title: "コモディイイダ 東新町店",
          icon: "./imgs/icon/icon-3.png"
        }, {
          lat: "35.74759883263215",
          lng: "139.68625611084371",
          title: "トモズ 大谷口店",
          icon: "./imgs/icon/icon-4.png"
        }, {
          lat: "35.74725523800465",
          lng: "139.68671417153223",
          title: "よしやSainE 大谷口店",
          icon: "./imgs/icon/icon-5.png"
        }, {
          lat: "35.747119639736816",
          lng: "139.6862339108895",
          title: "ダイソー よしや大谷口店",
          icon: "./imgs/icon/icon-6.png"
        }, {
          lat: "35.75103065166372",
          lng: "139.68888339653404",
          title: "オーケー 大谷口店",
          icon: "./imgs/icon/icon-7.png"
        }, {
          lat: "35.7453647577412",
          lng: "139.683477300235",
          title: "まいばすけっと 板橋向原3丁目店",
          icon: "./imgs/icon/icon-8.png"
        }, {
          lat: "35.746038587859985",
          lng: "139.67592676954874",
          title: "オーケー 小茂根店",
          icon: "./imgs/icon/icon-9.png"
        }, {
          lat: "35.743219904144446",
          lng: "139.6816290695488",
          title: "いさみ屋 小竹向原店",
          icon: "./imgs/icon/icon-10.png"
        }
      ];
      for (let i = 0; i < markerData.length; i++) {
        // マーカーを生成
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(markerData[i].lat, markerData[i].lng),
          title: markerData[i].title,
          map: gmap,
          icon: {
            url: markerData[i]['icon']// マーカーの画像を変更
          }
        });
        // マーカーを地図に表示
        marker.setMap(gmap);
      }

      // 文字非表示
      var style = [{
        featureType: 'all',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }];
      var lopanType = new google.maps.StyledMapType(style);
      gmap.mapTypes.set('noText', lopanType);
      gmap.setMapTypeId('noText');

    }
  }
}